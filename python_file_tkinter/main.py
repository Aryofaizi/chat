import tkinter as tk

window = tk.Tk()
user_input = tk.Entry(
    window,
)
grade_input = tk.Entry(
    window,
)
grades_label = tk.Label(
    window,
)

def btn_command():
    with open("grades.txt","a") as writer:
        input_value = user_input.get()
        if input_value == "" or input_value =="n":
            return
        else:
            new_grade = grade_input.get()
            writer.write(f"{input_value} {new_grade}\n")
        
def show_grades():
    with open("grades.txt","r") as reader:
        grades_label["text"] = reader.read()
    
btn = tk.Button(
    window,
    text="Submit",
    command=btn_command,
)
show_grades_btn = tk.Button(
    window,
    text="show grades".title(),
    command=show_grades,
)

user_input.pack()
grade_input.pack()
btn.pack()
show_grades_btn.pack()
grades_label.pack()
window.mainloop()