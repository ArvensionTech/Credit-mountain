api list:
POST:
/api/v1/auth/sign-up:
{"name":"","email":"","password":"","confirmPassword":""}
/api/v1/auth/sign-in:
{"email":"","password":""}
/api/v1/credit-card:
{"type":"", "cardNmber":"", "securityCode":"", "expirationDate":"", "monthlyLimit":"", "childId":""}
/api/v1/child
{"name":"", age:""}
PUT:
/api/v1/credit-card:
{"monthlyLimit":"", "childId":""}
/api/v1/child:
{"name":"", age:"","id":""}

GET:
/api/v1/auth: //get own user data if logged in
/api/v1/child: //view children under user
/api/v1/child/:id: //view child
/api/v1/credit-card: //view cards under user
/api/v1/credit-card: //view cards under user
/api/v1/credit-card/:id: //view specific cards under user
/api/v1/credit-card/:childId: //view cards under child

DELETE:
/api/v1/child: delete child
/api/v1/credit-card: delete credit card