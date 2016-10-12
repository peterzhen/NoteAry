User.destroy_all
Notebook.destroy_all
Note.destroy_all

demo = User.create!(username: "demo", password: "password")

notebook1 = Notebook.create!(title: "Shopping List", author_id: demo.id, description: "")
notebook2 = Notebook.create!(title: "To Do List", author_id: demo.id, description: "For Sunday")
notebook3 = Notebook.create!(title: "School Work", author_id: demo.id, description: "")

Note.create!(title: "Department Store", body: "<ol><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Hammer</span></li><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Sword</span></li><li><span style=\"font-size: 32px; background-color: rgb(255, 255, 255); color: rgb(0, 138, 0);\">Trash Can</span></li></ol>", author_id: demo.id, notebook_id: notebook1.id)
Note.create!(title: "Supermarket", body: "<p><strong style=\"font-size: 32px;\">Milk, Cereal, Yogurt, Ice</strong></p>", author_id: demo.id, notebook_id: notebook1.id)
Note.create!(title: "Morning time", body: "<p>Clean bathroom, Wash Car</p>", author_id: demo.id, notebook_id: notebook2.id)
Note.create!(title: "Afternoon", body: "<p>Pick up dry cleaning</p>", author_id: demo.id, notebook_id: notebook2.id)
Note.create!(title: "Evening", body: "<p>Dinner!</p>", author_id: demo.id, notebook_id: notebook2.id)
Note.create!(title: "Final", body: "<p><strong style=\"font-size: 32px;\"><u>uhhh????</u></strong></p>", author_id: demo.id, notebook_id: notebook3.id)
