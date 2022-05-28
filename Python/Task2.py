# from asyncio.windows_events import NULL
from re import M
import re
import mysql.connector

try:
   mydb = mysql.connector.connect(
   host="localhost",
   user="root",
   password="",
   database='Lab2_Python'
   )
except Error as e:
    print(e)

cur = mydb.cursor()    
# cur.execute('''create table Employee(
#             id int primary key not null,
#             full_name char(50),
#             money double,
#             sleep_mood char(50),
#             health_rate int,
#             email char(50),
#             workmood char(50),
#             salary double,
#             is_manager boolean
#             );''')

# cur.execute('''Insert into Employee(id,full_name, money, sleep_mood, health_rate,email, workmood, salary, is_manager)
#             values(1, 'hadeer', 2000, 'happy',99,'hadeer@g.com','happy',20000000, True),
#                   (2, 'monica', 3000, 'happy',100,'monica@g.com','happy',50000000, True),
#                   (3, 'omar', 5000, 'happy',98,'omar@g.com','happy',100000000, false)
#             ''')


class Person:        
   def __init__(self ,full_name, money, sleep_mood, health_rate):
      self.full_name = full_name
      self.money= money
      self.sleep_mood=sleep_mood

      if healthRate > 0 and healthRate < 100:
         self.healthRate = healthRate
      else:
         self.healthRate =NULL

   def sleep(self):
      print (" sleepmood %s" % Person.sleepmood) 
      
   def eat(self):
         print (" health_rate %s" % Person.health_rate) 

   def buy(self):
         print (" money %s" % Person.money)        


class Employee(Person):
   def __init__(self,full_name, money, sleep_mood, health_rate,id, email, workmood, salary, is_manager):
      Person.__init__(self,full_name, money, sleep_mood, health_rate)
      self.id = id

      regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
      if re.fullmatch(regex, email):
         self.email = email 
      else:
         self.email =NULL 
         
      self.workmood = workmood

      if self.salary>=1000:
         self.salary = salary 
      else:
         self.salary = 0

      self.is_manager = is_manager

   def work(self,hours):
            if hours<8:
             self.workmood = "tired"
            elif hours>8:
             self.workmood = "lazy"
            else:
             self.workmood = "happy"
            return Employee.workmood


   def sleep(self,hours):
         if hours<7:
            self.sleepmood = "tired"
         elif hours>7:
            self.sleepmood = "lazy"
         else:
            self.sleepmood = "happy"        
         return Person.sleepmood

   def eat(self,meals):
        if meals ==3:
            self.healthRate = 100
        if meals ==2:
            self.healthRate =75
        if meals ==1:
            self.healthRate =50       
        return Person.healthRate

   def buy(self,items):
        if items==1:
            self.money=self.money-10
        return Person.buy   

   def sendEmail(self, to, subject, body, receiver_name):
            f = open('email_file.txt', 'w')
            f.write("Email Send To : "+to +"\n"+"Email Subject is : "+subject +"\n"+"Email Body is : "+body+"\n"+"Receiver Name is : "+receiver_name)
            f.close()
  

class Office:
   def __init__ (self,name,employees):
      self.name = name
      self.employees = employees

   def get_all_employees(self):
      cur.execute('select * from Employee')
      rows = cur.fetchall()
      for row in rows:
         print(row)
    
   def get_employee(self,empid):
      cur.execute(f'select * from Employee where id='+empid)   
      row = cur.fetchone()
      print(row)
      
   def fire(self,empid):
      cur.execute(f'delete from Employee where id='+empid)   
  
   def hire(self,employee):  
      print(employee)
      var1=f'insert into Employee(id,full_name, money, sleep_mood, health_rate,email, workmood, salary, is_manager)values({employee["id"]}, "{employee["full_name"]}",{employee["money"]}, "{employee["sleep_mood"]}",{employee["health_rate"]},"{employee["email"]}","{employee["workmood"]}",{employee["salary"]},{employee["is_manager"]})'
      cur.execute(var1)

flag =True
while(flag):
    Off=Office('adham',[])
    print("1-Add\n2-Get Employee\n3-Get All Employees\n4-Delete Employee\n5-Quit\n")
    choice=input("Enter choice: ")
    if choice=="1":
            id=input("Enter id for Employee: ")
            full_name=input("Enter name for Employee: ")
            money=input("Enter money for Employee: ")
            sleep_mood=input("Enter sleep_mood for Employee: ")
            health_rate=input("Enter health_rate for Employee: ")
            email=input("Enter email for Employee: ")
            workmood=input("Enter workmood for Employee: ")
            salary=input("Enter salary for Employee: ")
            is_manager=input("Enter 1 if you are Manager: ")
            Off.hire({"id":id, "full_name":full_name,"money":money,"sleep_mood":sleep_mood,"health_rate":health_rate,"email":email,"workmood":workmood,"salary":salary,"is_manager":is_manager})
    elif choice=="2":
            id=input("Enter Employee id: ")
            Off.get_employee(id)
    elif choice=="3":
            Off.get_all_employees()
    elif choice=="4":
            id=input("Enter Employee id: ")
            Off.fire(id)
    elif choice=="5":
            break
    else:
         print('invalid choice')
         flag =false
   mydb.commit() 
mydb.close()




