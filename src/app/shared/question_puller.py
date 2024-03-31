# I want to take text and end up with this
#   id: 1,
#     qtext:
#       "Lelush, a contestant on Tencent’s making the boy band show Produce Camp 2021, made it all the way to the finals despite what?",
#     answersNum: 6,
#     correctIndex: 0,
#     answersArray: [
#       {
#         id: 0,
#         letter: "A",
#         text: "Asking to be votted out of the show.",
#      etc
#     ],
#   },

import json

# open file
filename = 'qs.txt'

# final dict for export| to json
show_dict = {}


q_counter = 0
a_counter = 0
letters = ["A", "B", "C", "D", "E","F"]


with open(filename) as qtxt_data:
    for line in qtxt_data:
        if (line == "END"):
            #kill extraction
            continue
        symbol = line[0]
        #new question
        if (symbol == "~"):
            q_dict = {}
            a_dict = {}
            q_id = q_counter
            q_counter += 1
            q_string = line[1:] #this cuts off the symbol

        #otherwise its an answer
        elif (symbol == "-"):
            # add answer to answer array
            a_dict[id = a_counter]
            a_dict[letter = letters[a_counter]]


