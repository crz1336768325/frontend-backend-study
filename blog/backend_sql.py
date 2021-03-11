import mysql.connector

class backend_sql:
    def __init__(self):
        super().__init__()
        self.conn = mysql.connector.connect(host="localhost",user='root', password='password', database='crz', use_unicode=True)
        self.cursor=self.conn.cursor()
        self.cursor.execute("show databases;")
        print(self.cursor.fetchall())
        self.cursor.execute("use backendsql;")
    def checkexist(param):
        pass
    def insert(param):
        username=param[0]
        password=param[1]
        if self.checkexist(username):
            return False
        else:
            sql = 'insert into USER values%s,%s)'%(username,password)
            self.cursor.execute(sql)
            return True
    def delete(username):
        sql='DELETE from USER WHERE username=%s'%(username)
        self.cursor.excute(sql)
        

    def search(age,gender):
        print("search--------")
        sql="SELECT * FROM USER WHERE AGE_RANGE="+str(age)+" AND GENDER="+"'"+gender+"'"+";"
        print(sql)
        # sql = "SELECT * FROM USER WHERE AGE_RANGE=5 AND GENDER='M';"
        self.cursor.execute(sql)
        result=self.cursor.fetchall()
        print(result)
        for row in result:
            print(row[0])
            print(row[1])
            print(row[2])
    def exit():
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