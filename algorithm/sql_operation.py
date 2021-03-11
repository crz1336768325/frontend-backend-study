import mysql.connector
conn = mysql.connector.connect(host="localhost",user='root', password='password', database='crz', use_unicode=True)
cursor=conn.cursor()
cursor.execute("show databases;")
print(cursor.fetchall())
cursor.execute("use crz;")

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

sql = "SELECT * FROM USER WHERE AGE_RANGE=5 AND GENDER='M';"
cursor.execute(sql)
result=cursor.fetchall()
print(result)
for row in result:
    print(row[0])
    print(row[1])
    print(row[2])