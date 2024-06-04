import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/user.repository';
import { IAccessToken } from '../types/responses/user.response';

class UserService {
  formatAccessTokenData(user: User) {
    const TOKEN_EXPIRES_TIME = parseInt(process.env.TOKEN_EXPIRES_TIME, 10);
    const TOKEN_EXPIRES_TIME_HOURS = parseInt(process.env.TOKEN_EXPIRES_TIME_HOURS, 10);
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + TOKEN_EXPIRES_TIME_HOURS + 9);
    expirationTime.setMinutes(expirationTime.getMinutes() + TOKEN_EXPIRES_TIME);
    const tokenData: IAccessToken = {
      exp: Math.floor(expirationTime.getTime() / 1000),
      user_id: user.userID,
      username: user.userName,
      approval: user.approvalAuthority,
      management: user.managementAuthority,
      division_cd: user.divisionCode,
      office_cd: user.officeCode,
      status: true,
    };

    return tokenData;
  }

  async handleGetUser(userID: string, password: string) {
    const userRepository = new UserRepository();

    const user = await userRepository.findOne({
      userID,
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  handleGenerateAccessToken(userData: User) {
    const dataToken = this.formatAccessTokenData(userData);
    const accessToken = jwt.sign(dataToken, process.env.JWT_SECRET as string);
    return {
      accessToken,
      exp: dataToken?.exp,
    };
  }
}

export default UserService;
