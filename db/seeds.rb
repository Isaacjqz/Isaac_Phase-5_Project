# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seed start"

UserLocation.destroy_all
Detail.destroy_all 
Goal.destroy_all
Location.destroy_all
Match.destroy_all
User.destroy_all

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create user"

user_1 = User.create(first_name:"Isaac", last_name:"Jaquez", age:"35", email:"isaac@tenten.com", zip_code: "10032", user_name:"isaac212", password: "test1212", current_country:"USA", current_state:"New York", current_city:"NYC")
user_2 = User.create(first_name:"Ada", last_name:"Lovelace", age:"205", email:"ada@tenten.com", zip_code: "10032", user_name:"ada205", password: "test205", current_country:"USA", current_state:"New York", current_city:"NYC")
user_3 = User.create(first_name:"Yakihiro", last_name:"Matsumoto", age:"57", email:"yakihiro@tenten.com", zip_code: "10032", user_name:"yakihiro57", password: "test57", current_country:"New York", current_state:"New York", current_city:"NYC")
user_4 = User.create(first_name:"Grace", last_name:"Hopper", age:"117", email:"grace@tenten.com", zip_code: "10032", user_name:"grace117", password: "test117", current_country:"USA", current_state:"New York", current_city:"NYC")
user_5 = User.create(first_name:"Pablo", last_name:"Fuentes", age:"35", email:"pablo@tenten.com", zip_code: "10032", user_name:"pablo212", password: "test1212", current_country:"USA", current_state:"New York", current_city:"NYC")
user_6 = User.create(first_name:"Nasty", last_name:"Nate", age:"205", email:"nasty@tenten.com", zip_code: "10032", user_name:"nasty", password: "test205", current_country:"USA", current_state:"Texas", current_city:"Austin")
user_7 = User.create(first_name:"Ryan", last_name:"Fassi", age:"57", email:"ryan@tenten.com", zip_code: "10032", user_name:"ryan57", password: "test57", current_country:"USA", current_state:"Florida", current_city:"Miami")
user_8 = User.create(first_name:"Samuel", last_name:"Gaddis", age:"117", email:"samuel@tenten.com", zip_code: "10032", user_name:"samuel117", password: "test117", current_country:"USA", current_state:"New York", current_city:"NYC")
user_9 = User.create(first_name:"Bruce", last_name:"Lee", age:"35", email:"bruce@tenten.com", zip_code: "10032", user_name:"bruce212", password: "test1212", current_country:"USA", current_state:"California", current_city:"San Francisco")
user_10 = User.create(first_name:"Jack", last_name:"Black", age:"205", email:"jack@tenten.com", zip_code: "10032", user_name:"jack205", password: "test205", current_country:"USA", current_state:"California", current_city:"LA")

puts "user created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create location"

location_1 = Location.create(current_country:"USA", current_state: "NY", current_city: "NYC", zip_code: "10032")
location_2 = Location.create(current_country:"UK", current_state: "London", current_city: "Londo", zip_code: "10032")
location_3 = Location.create(current_country:"Japan", current_state: "Osaka", current_city: "Osaka", zip_code: "10032")
location_4 = Location.create(current_country:"USA", current_state: "NY", current_city: "NYC", zip_code: "10002")
# location_5 = Location.create(current_country:"USA", current_state: "NY", current_city: "NYC", zip_code: "10032")
# location_6 = Location.create(current_country:"USA", current_state: "London", current_city: "Londo", zip_code: "10032")
# location_7 = Location.create(current_country:"USA", current_state: "Osaka", current_city: "Osaka", zip_code: "10032")
# location_8 = Location.create(current_country:"USA", current_state: "NY", current_city: "NYC", zip_code: "10002")
# location_9 = Location.create(current_country:"USA", current_state: "NY", current_city: "NYC", zip_code: "10032")
# location_10 = Location.create(current_country:"USA", current_state: "London", current_city: "Londo", zip_code: "10032")


puts "location created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create location"

user_location_1 =UserLocation.create(user_id:user_1.id, location_id: location_1.id)
user_location_2 =UserLocation.create(user_id:user_2.id, location_id: location_2.id)
user_location_3 =UserLocation.create(user_id:user_3.id, location_id: location_3.id)
user_location_4 =UserLocation.create(user_id:user_4.id, location_id: location_4.id)
user_location_5 =UserLocation.create(user_id:user_5.id, location_id: location_4.id)
user_location_6 =UserLocation.create(user_id:user_6.id, location_id: location_3.id)
user_location_7 =UserLocation.create(user_id:user_7.id, location_id: location_3.id)
user_location_8 =UserLocation.create(user_id:user_8.id, location_id: location_1.id)
user_location_9 =UserLocation.create(user_id:user_9.id, location_id: location_1.id)
user_location_10 =UserLocation.create(user_id:user_10.id, location_id: location_1.id)


puts "location created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create goal"

goal_1 = Goal.create(user_id:user_1.id, goals:"What is your fitness goal?")
goal_2 = Goal.create(user_id:user_2.id, goals:"What is your fitness goal?")
goal_3 = Goal.create(user_id:user_3.id, goals:"What is your fitness goal?")
goal_4 = Goal.create(user_id:user_4.id, goals:"What is your fitness goal?")

puts "goal created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create detail"

detail_1 = Detail.create(user_id:user_1.id, questions:"My goal is to be consistent with my health")
detail_2 = Detail.create(user_id:user_2.id, questions:"How often do you attend the gym?")
detail_3 = Detail.create(user_id:user_3.id, questions:"What do you look for in a gym partner?")
detail_4 = Detail.create(user_id:user_4.id, questions:"How much time are you willing to dedicate to your physical health?")

puts "detail created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create match"

match_1 = Match.create(user_id:user_1.id, location_id:location_1.id, status:"pending, accepted, rejected", message:"Hi, my name  is Isaac! Pleased to meet you!", match_time: "1/1/01")
match_2 = Match.create(user_id:user_2.id, location_id:location_2.id, status:"pending, accepted, rejected", message:"Hi, my name  is Ada! Pleased to meet you!", match_time: "1/1/01")
match_3 = Match.create(user_id:user_3.id, location_id:location_3.id, status:"pending, accepted, rejected", message:"Hi, my name  is Yakihiro! Pleased to meet you!", match_time: "1/1/01")
match_4 = Match.create(user_id:user_4.id, location_id:location_4.id, status:"pending, accepted, rejected", message:"Hi, my name  is Grace! Pleased to meet you!", match_time: "1/1/01")

puts "match created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "SUCCESS!!!"