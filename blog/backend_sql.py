import mysql.connector

class backend_operation:
    def __init__(self):
        super().__init__()
        self.conn = mysql.connector.connect(host="localhost",user='root', password='password', database='backendsql', use_unicode=True)
        self.cursor=self.conn.cursor()
        self.cursor.execute("show databases;")
        print(self.cursor.fetchall())
        self.cursor.execute("use backendsql;")
    def checkexist(self,username,password):
        
        sql="SELECT * FROM user WHERE username="+"'"+str(username)+"'"+ ";"
        
        self.cursor.execute(sql)
        result=self.cursor.fetchall()
        print("check result",result)
        if len(result)==0:
            return False
        else:
            return True
    def insertUsername(self,param):
        username=param[0]
        password=param[1]
        if self.checkexist(username,password):
            # self.exit()
            return False
        else:
            sql = "insert into user(username,password) values('%s','%s')"%(username,password)+";"
            print("what",sql)
            self.cursor.execute(sql)
            self.conn.commit()
            # self.exit()
            return True
    def deleteUser(self,username):

        sql="DELETE from user WHERE username='%s'"%(username)+";"
        print("sq",sql)
        self.cursor.execute(sql)
        self.conn.commit()
        return True

        

    def searchUser(self):
        print("search--------")
        sql="SELECT * FROM user ;"
        print(sql)
        # sql = "SELECT * FROM USER WHERE AGE_RANGE=5 AND GENDER='M';"
        self.cursor.execute(sql)
        result=self.cursor.fetchall()

        # for row in result:
        #     print(row[0])
        return result
    def modifyUserPassword(self,username,password):
        print("modify--------")
        sql="UPDATE user set password='%s' where username='%s';"%(password,username)
        print(sql)
        # sql = "SELECT * FROM USER WHERE AGE_RANGE=5 AND GENDER='M';"
        self.cursor.execute(sql)
        # result=self.cursor.fetchall()
        self.conn.commit()
        # for row in result:
        #     print(row[0])
        return True
    def exit(self):
        self.conn.commit()
        self.cursor.close()
        self.conn.close()
 

# cursor.execute("DROP TABLE IF EXISTS USER")

# sql = """CREATE TABLE USER (
#          USER_ID  INT  PRIMARY KEY NOT NULL,
#          AGE_RANGE  INT,
#          GENDER CHAR(12)
#           )"""
# cursor.execute(sql)

# with open("user_info_format1.csv",'r') as f:
#     txt=f.readlines()
#     for i in range(1,len(txt)):
#         # print(txt[i].split(',')[0],txt[1].split(',')[1],txt[1].split(',')[2][:1])
#         id,age,gender=txt[i].split(',')[0],txt[i].split(',')[1],txt[i].split(',')[2][:1]
#         print(gender)
#         gender="'"+gender+"'"
#         sql = 'insert into USER values(%d,%d,%s)'%(int(id),int(age),gender)
#         print(sql)
#         cursor.execute(sql)
# conn.commit()
# cursor.close()
# conn.close()


# search(5,'M')