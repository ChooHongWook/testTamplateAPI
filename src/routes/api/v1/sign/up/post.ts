import { Request, Response } from 'express';
// import { UserService } from '../../../../services/users/application/service';

/**
 * 스키마들 타입 정리, (테스트나 대입용으로 사용)
 */
// type bodySchema =
// type querySchema =
// type paramsSchema =
// type outputSchema =

module.exports = async (req: Request, res: Response) => {
  console.log('server signup in !!');
  // 1. req destructuring
  // const { email, password, nickname, image } = req.body;
  // const {  } = req.query;
  // const {  } = req.params;

  // 2. 서비스 호출
  // const user = await userService.register(props);

  // 3. 서비스 결과값 body 로 설정
  const body = {};

  res.json({ message: '연결완료', body });
};
