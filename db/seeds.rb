# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

demoUser = User.create(username: "demo", password: "password")

Notebook.destroy_all

notebook1 = Notebook.create(
                            title: "First Notebook",
                            author_id: demoUser.id,
                            description: "Dev Notebook 1"
                            )

notebook2 = Notebook.create(
                            title: "Second Notebook",
                            author_id: demoUser.id,
                            description: "Dev Notebook 2"
                            )

Note.destroy_all

note1 = Note.create(
                    title: "First Note!",
                    body: "Congrats! This is your first note!",
                    author_id: demoUser.id,
                    notebook_id: notebook1.id
                    )

note2 = Note.create(
                    title: "Second Note!",
                    body: "Congrats! This is your second note!",
                    author_id: demoUser.id,
                    notebook_id: notebook1.id
                    )

note3 = Note.create(
                    title: "Third Note!",
                    body: "Congrats! This is your third note!",
                    author_id: demoUser.id,
                    notebook_id: notebook1.id
                    )

note4 = Note.create(
                    title: "Fourth Note!",
                    body: "Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of
                    Lorem Ipsum.",
                    author_id: demoUser.id,
                    notebook_id: notebook2.id
                    )

note5 = Note.create(
                    title: "Fifth Note!",
                    body: "Congrats! This is your fifth note!",
                    author_id: demoUser.id,
                    notebook_id: notebook2.id
                    )

note6 = Note.create(
                    title: "Sixth Note!",
                    body: "Congrats! This is your sixth note!",
                    author_id: demoUser.id,
                    notebook_id: notebook2.id
                    )
