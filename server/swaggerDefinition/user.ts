/* istanbul ignore file */

// Define schema
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         ID:
 *           type: number
 *           required: true
 *         User_ID:
 *           type: string
 *         User_Name:
 *           type: string
 *         Password:
 *           type: number
 *         Division_CD:
 *           type: number
 *         Office_CD:
 *           type: string
 *         Mail:
 *           type: string
 *         Approval_Authority:
 *           type: number
 *         Management_Authority:
 *           type: string
 *         Shipping_Base_Flag:
 *           type: number
 *         Shipping_Base_CD:
 *           type: string
 *         Broadcaster_Flag:
 *           type: number
 *         Create_User:
 *           type: string
 *         Create_Date:
 *           type: string
 *           format: date-time
 *         Update_Date:
 *           type: string
 *           format: date-time
 *         Update_User:
 *           type: string
 *         Delete_Flag:
 *           type: number
 *
 */

// Define schema for response/requestBody/parameters api
/**
 * @swagger
 * definitions:
 *   requestBodyLogin:
 *     required:
 *       - userid
 *       - password
 *     properties:
 *       userid:
 *         type: string
 *       password:
 *         type: string
 *
 *   responseLogin:
 *     properties:
 *       status:
 *         type: boolean
 *       message:
 *         type: string
 *       token:
 *         type: string
 *       user_id:
 *         type: string
 *       username:
 *         type: string
 *       approval:
 *         type: string
 *       management:
 *         type: string
 *       division_cd:
 *         type: string
 *       office_cd:
 *         type: string
 *
 */

// Define tags

/**
 * @swagger
 * tags:
 *   name: Authenticate
 */

// Define api

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Authenticate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/requestBodyLogin'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/definitions/responseLogin'
 */
