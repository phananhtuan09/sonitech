import { IPayloadLoginUser } from "@/server/types/requests/user.request";
import { ResponseSuccess } from "@/server/response/helperResponse";
import { loginSchema } from "@/server/validations/user.validation";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { userid, password } = loginSchema.parse(request.body);

  return new ResponseSuccess(
    200,
    {
      message: "ok",
    },
    request
  ).send(Response.json);
}
