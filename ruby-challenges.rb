# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# Pseudo code
# We start off with a a def called only_this, 
# this def is going to evalute an  array and a string
# We are going to iterate through the array using select because we are only returning certain values
# and we are going to use .include to find the the words that "incluse the letter from the string"


def only_this arr, str
     arr.select do |value|
        value.include? str
    end
end
p only_this(beverages_array, letter_o)
p only_this(beverages_array, letter_t)



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# # # Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100
#PSuedo Code
# create a def that returns the sum of an array
# First attempt we did array.sum do so we could add everything... that didn't work
# def sum_of arr
#     arr.sum do |value|
#         sum
#     end
# end
# I'm trying each to array and then I'm going to try to use sum += value to add each value inside the array.
# Ok, so it's saying that sum is undefind, so I put that sum = 0  and I printed sum then started my def and it doesn't work
# I just re-arranged it and it prints 76,76, and 100, 100.... semi happy with results... moving along :/

def sum_of arr
    sum = 0
    arr.each do |value|
        sum += value
    end
    p sum
end

p sum_of(nums_array1)
p sum_of(nums_array2)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize model, wheels, current_speed
        @model =  model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "My bike is a #{@model} with #{@wheels} wheels and is currently going #{@current_speed} mph."
    end
    def pedal_faster speed
        @current_speed = @current_speed += speed
    end
    def braking speed
        if @current_speed - speed >= 0
        else 
            @current_speed = 0
        end
    end
end

ashley_s = Bike.new 'trek', 2, 0
p ashley_s.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

p ashley_s.pedal_faster 5
p ashley_s.pedal_faster 22
p ashley_s.bike_info
p ashley_s.braking 87
p ashley_s.bike_info
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0
