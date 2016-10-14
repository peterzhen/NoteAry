User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all

demo = User.create!(username: "demo", password: "password")

resumes = Notebook.create!(title: "Resumes", author_id: demo.id, description: "for work and stuff")
to_do_list = Notebook.create!(title: "To Do List", author_id: demo.id, description: "For Sunday")
cups = Notebook.create!(title: "Cups", author_id: demo.id, description: "For Sunday")
cat_facts = Notebook.create!(title: "Cat Facts", author_id: demo.id, description: "all about the cats")
school_notes = Notebook.create!(title: "School Notes", author_id: demo.id, description: "")

resume = Note.create!(title: "Truck Driver Resume", body: "<p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 32px; background-color: rgb(255, 255, 255);\">Ernest Faulkner</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;\">113 Evergreen Terrace · Elk Grove, California 95624</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;\">earnesttrucker@myisp.com · (916) 555-3846&nbsp;&nbsp;&nbsp;</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 32px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\"><u>Qualifications Summary</u></strong></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Dedicated, safety-conscious&nbsp;Truck Driver&nbsp;with more than 14 years of experience transporting and delivering freight throughout the western United States.</span></p><ul><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Focused on ensuring on-time delivery within specified timeframes; assist with load / unload process and promote customer loyalty and retention.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Solid track record achieving efficient, cost-effective transportation operations of goods and hazardous materials while maintaining compliance with federal, state, and municipal regulations.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">In-depth knowledge of specialized transportation equipment, including reefers, tankers, pneumatic bulkers, and double pups.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Outstanding safety and driving record with friendly, professional attitude; sustain record of zero preventable accidents and proactively perform vehicle and equipment checks.</span></li></ul><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">&nbsp;</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 32px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\"><u>Professional Experience</u></strong></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">CTD Transportation – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Driver, 10/2010 – Present</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Deliver fuel to service stations for regional transporter of petroleum products. Oversee refueling to ensure compliance with all regulations governing safe handling of flammable and hazardous materials. Maintain comprehensive delivery records and facilitate management of customer accounts by placing orders, collecting payments, and providing records of transaction.</span></p><ul><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Maintained consistent on-time delivery record with 90% of all orders arriving ahead of schedule.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Recognized for outstanding professional achievement, earning company’s Safe Driving Award for three years running.</span></li></ul><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Rock and Sand, Inc. – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Delivery Driver, 3/2006 – 9/2010</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Ensured timely delivery of sand, gravel, and concrete products to numerous local construction sites. Mixed concrete to customer-specified slump levels and assisted contractors in pouring foundations, footing, and slabs. Provided detailed reports on mechanical and equipment condition / failures to facilitate maintenance.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Timber Green, Inc. – Modesto, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Driver, 2/2001 – 2/2006</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Transported raw timber from harvest sites to processing facilities. Assisted logging crew and mill foremen in loading and unloading timber from trailer. Tracked and maintained logs in accordance with Hours-of-Service (HOS) regulations. Reported damaged or malfunctioning equipment to company mechanics.</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Training and Licensure</strong></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">&nbsp;Certificate of Completion</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Truck Driving School – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Licensure: CDL with Class A, T&amp;X Endorsements</span></p><p><br></p>",
                      author_id: demo.id, notebook_id: resumes.id)

note1 = Note.create!(title: "Department Store", body: "<ol><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Hammer</span></li><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Sword</span></li><li><span style=\"font-size: 32px; background-color: rgb(255, 255, 255); color: rgb(0, 138, 0);\">Trash Can</span></li></ol>", author_id: demo.id, notebook_id: resumes.id)
note2 = Note.create!(title: "Supermarket", body: "<p><strong style=\"font-size: 32px;\">Milk, Cereal, Yogurt, Ice</strong></p>", author_id: demo.id, notebook_id: resumes.id)
note3 = Note.create!(title: "Morning time", body: "<p>Clean bathroom, Wash Car</p>", author_id: demo.id, notebook_id: resumes.id)
note4 = Note.create!(title: "Afternoon", body: "<p>Pick up dry cleaning</p>", author_id: demo.id, notebook_id: resumes.id)
note5 = Note.create!(title: "Evening", body: "<p>Dinner!</p>", author_id: demo.id, notebook_id: resumes.id)
note6 = Note.create!(title: "Final", body: "<p><strong style=\"font-size: 32px;\"><u>uhhh????</u></strong></p>", author_id: demo.id, notebook_id: resumes.id)


tag1 = Tag.create!(name: "list")
tag2 = Tag.create!(name: "homework")
tag3 = Tag.create!(name: "to do")

Tagging.create!(note_id: note4.id, tag_id: tag3.id)
Tagging.create!(note_id: note4.id, tag_id: tag2.id)
Tagging.create!(note_id: note5.id, tag_id: tag3.id)
Tagging.create!(note_id: note5.id, tag_id: tag2.id)
Tagging.create!(note_id: note6.id, tag_id: tag3.id)
Tagging.create!(note_id: note6.id, tag_id: tag2.id)
Tagging.create!(note_id: note1.id, tag_id: tag1.id)
Tagging.create!(note_id: note2.id, tag_id: tag1.id)



# demo = User.create!(username: "demo", password: "password")
#
# notebook1 = Notebook.create!(title: "Shopping List", author_id: demo.id, description: "")
# notebook2 = Notebook.create!(title: "To Do List", author_id: demo.id, description: "For Sunday")
# notebook3 = Notebook.create!(title: "School Work", author_id: demo.id, description: "")
#
# note1 = Note.create!(title: "Department Store", body: "<ol><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Hammer</span></li><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Sword</span></li><li><span style=\"font-size: 32px; background-color: rgb(255, 255, 255); color: rgb(0, 138, 0);\">Trash Can</span></li></ol>", author_id: demo.id, notebook_id: notebook1.id)
# note2 = Note.create!(title: "Supermarket", body: "<p><strong style=\"font-size: 32px;\">Milk, Cereal, Yogurt, Ice</strong></p>", author_id: demo.id, notebook_id: notebook1.id)
# note3 = Note.create!(title: "Morning time", body: "<p>Clean bathroom, Wash Car</p>", author_id: demo.id, notebook_id: notebook2.id)
# note4 = Note.create!(title: "Afternoon", body: "<p>Pick up dry cleaning</p>", author_id: demo.id, notebook_id: notebook2.id)
# note5 = Note.create!(title: "Evening", body: "<p>Dinner!</p>", author_id: demo.id, notebook_id: notebook2.id)
# note6 = Note.create!(title: "Final", body: "<p><strong style=\"font-size: 32px;\"><u>uhhh????</u></strong></p>", author_id: demo.id, notebook_id: notebook3.id)
#
# tag1 = Tag.create!(name: "list")
# tag2 = Tag.create!(name: "homework")
# tag3 = Tag.create!(name: "to do")
#
# Tagging.create!(note_id: note4.id, tag_id: tag3.id)
# Tagging.create!(note_id: note4.id, tag_id: tag2.id)
# Tagging.create!(note_id: note5.id, tag_id: tag3.id)
# Tagging.create!(note_id: note5.id, tag_id: tag2.id)
# Tagging.create!(note_id: note6.id, tag_id: tag3.id)
# Tagging.create!(note_id: note6.id, tag_id: tag2.id)
# Tagging.create!(note_id: note1.id, tag_id: tag1.id)
# Tagging.create!(note_id: note2.id, tag_id: tag1.id)
