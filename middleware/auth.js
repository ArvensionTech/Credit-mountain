const auth = (request, response, next) => {
  if (!request.session?.user?.id) {
    // console.log(request.session?.user);
    return response.sendStatus(404);
  }
  next();
};
export default auth;