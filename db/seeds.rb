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
                            description: "Dev Notebook"
                            )

Note.destroy_all

note1 = Note.create(
                    title: "First Note!",
                    body: "Congrats! This is your first note!",
                    author_id: demoUser.id,
                    notebook_id: notebook1.id
                    )
