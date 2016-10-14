User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all

list_tag = Tag.create!(name: "list")
cat_tag = Tag.create!(name: "cat")
feline_tag = Tag.create!(name: "feline")
kitty_tag = Tag.create!(name: "kitty")
school_tag = Tag.create!(name: "school")
noteary_tag = Tag.create!(name: "NoteAry")
facts_tag = Tag.create!(name: "facts")
resume_tag = Tag.create!(name: "resume")
aa_tag = Tag.create!(name: "App Academy")
fullstack_tag = Tag.create!(name: "FullStack")
yolo_tag = Tag.create!(name: "#yolo")

demo = User.create!(
                    username: "demo",
                    password: "password"
                    )

resumes = Notebook.create!(
                      title: "Resumes",
                      author_id: demo.id,
                      description: "for work and stuff"
                      )
to_do_list = Notebook.create!(
                      title: "To Do List",
                      author_id: demo.id,
                      description: "For Sunday"
                      )
cups = Notebook.create!(
                      title: "Cups",
                      author_id: demo.id,
                      description: ""
                      )
cat = Notebook.create!(
                      title: "Cats",
                      author_id: demo.id,
                      description: "all about the cats"
                      )
school_notes = Notebook.create!(
                      title: "School Notes",
                      author_id: demo.id,
                      description: ""
                      )

resume = Note.create!(
                      title: "Truck Driver Resume",
                      body: '<p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 32px; background-color: rgb(255, 255, 255);\">Ernest Faulkner</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;\">113 Evergreen Terrace · Elk Grove, California 95624</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); font-size: 18px;\">earnesttrucker@myisp.com · (916) 555-3846&nbsp;&nbsp;&nbsp;</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 32px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\"><u>Qualifications Summary</u></strong></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Dedicated, safety-conscious&nbsp;Truck Driver&nbsp;with more than 14 years of experience transporting and delivering freight throughout the western United States.</span></p><ul><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Focused on ensuring on-time delivery within specified timeframes; assist with load / unload process and promote customer loyalty and retention.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Solid track record achieving efficient, cost-effective transportation operations of goods and hazardous materials while maintaining compliance with federal, state, and municipal regulations.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">In-depth knowledge of specialized transportation equipment, including reefers, tankers, pneumatic bulkers, and double pups.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Outstanding safety and driving record with friendly, professional attitude; sustain record of zero preventable accidents and proactively perform vehicle and equipment checks.</span></li></ul><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">&nbsp;</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 32px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\"><u>Professional Experience</u></strong></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">CTD Transportation – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Driver, 10/2010 – Present</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Deliver fuel to service stations for regional transporter of petroleum products. Oversee refueling to ensure compliance with all regulations governing safe handling of flammable and hazardous materials. Maintain comprehensive delivery records and facilitate management of customer accounts by placing orders, collecting payments, and providing records of transaction.</span></p><ul><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Maintained consistent on-time delivery record with 90% of all orders arriving ahead of schedule.</span></li><li><span style=\"color: rgba(0, 0, 0, 0.870588); font-family: Roboto, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Recognized for outstanding professional achievement, earning company’s Safe Driving Award for three years running.</span></li></ul><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Rock and Sand, Inc. – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Delivery Driver, 3/2006 – 9/2010</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Ensured timely delivery of sand, gravel, and concrete products to numerous local construction sites. Mixed concrete to customer-specified slump levels and assisted contractors in pouring foundations, footing, and slabs. Provided detailed reports on mechanical and equipment condition / failures to facilitate maintenance.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Timber Green, Inc. – Modesto, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Driver, 2/2001 – 2/2006</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Transported raw timber from harvest sites to processing facilities. Assisted logging crew and mill foremen in loading and unloading timber from trailer. Tracked and maintained logs in accordance with Hours-of-Service (HOS) regulations. Reported damaged or malfunctioning equipment to company mechanics.</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Training and Licensure</strong></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">&nbsp;Certificate of Completion</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Truck Driving School – Sacramento, California</span></p><p><span style=\"color: rgba(0, 0, 0, 0.870588); font-size: 16px; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255);\">Licensure: CDL with Class A, T&amp;X Endorsements</span></p><p><br></p>',
                      author_id: demo.id,
                      notebook_id: resumes.id
                      )

Tagging.create!(
                note_id: resume.id,
                tag_id: resume_tag.id
                )
Tagging.create!(
                note_id: resume.id,
                tag_id: yolo_tag.id
                )

cat_note = Note.create!(
                         title: "The Cat",
                         body: '<ol><li><span style="font-size: 32px; color: rgb(230, 0, 0);">is a feline</span></li><li><span style="font-size: 18px;">Four Legs</span></li><li><em style="font-size: 32px;"><s>HAS TAIL</s></em></li><li><em style="font-size: 32px; background-color: rgb(0, 102, 204);">definitely has eyes</em></li></ol>',
                         author_id: demo.id,
                         notebook_id: cat.id
                         )

Tagging.create!(
               note_id: cat_note.id,
               tag_id: kitty_tag.id
               )
Tagging.create!(
               note_id: cat_note.id,
               tag_id: feline_tag.id
               )
Tagging.create!(
              note_id: cat_note.id,
              tag_id: cat_tag.id
              )

interesting_facts_note = Note.create!(
                        title: "Interesting Facts",
                        body: '<p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.[4]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.[9]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">The technical term for a cat’s hairball is a “bezoar.”[6]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">A group of cats is called a “clowder.”[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.[9]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Cats make about 100 different sounds. Dogs make only about 10.[9]</span></p><p><u style="color: rgb(74, 74, 74); font-size: 12px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);"><img src="http://d2hrttk8kq6tpp.cloudfront.net/fun-kitten-fact.jpg"></u><span style="color: rgb(74, 74, 74); font-size: 12px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Many people in China consider cats a "warming" food that is perfect to eat during the winter</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Every year, nearly four million cats are eaten in Asia.[8]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.[11]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Approximately 24 cat skins can make a coat.[5]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">During the Middle Ages, cats were associated with withcraft, and on St. John’s Day, people all over Europe would stuff them into sacks and toss the cats into bonfires. On holy days, people celebrated by tossing cats from church towers.[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">The group of words associated with cat (catt,&nbsp;cath,&nbsp;chat,&nbsp;katze) stem from the Latin&nbsp;catus, meaning domestic cat, as opposed to&nbsp;feles, or wild cat.[2]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German&nbsp;puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy.[10]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Approximately 40,000 people are bitten by cats in the U.S. annually.[7]</span></p><p><u style="color: rgb(74, 74, 74); font-size: 12px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);"><img src="http://d2hrttk8kq6tpp.cloudfront.net/cat-most-popular.jpg"></u><span style="color: rgb(74, 74, 74); font-size: 12px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Cats are the worlds most popular pets, outnumbering dogs by as many as three to one</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.[7]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.[9]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.[1]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.[1]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat’s scent.[1]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Researchers are unsure exactly how a cat purrs. Most veterinarians believe that a cat purrs by vibrating vocal folds deep in the throat. To do this, a muscle in the larynx opens and closes the air passage about 25 times per second.[9]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice.[4]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and carted off to be used by farmers in England and the U.S. for fertilizer.[9]</span></p><p><span style="color: rgb(93, 97, 100); font-size: 16px; font-family: &quot;Open Sans&quot;; background-color: rgb(255, 255, 255);">Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.[3]</span></p>',
                        author_id: demo.id,
                        notebook_id: school_notes.id
                        )

Tagging.create!(
               note_id: interesting_facts_note.id,
               tag_id: kitty_tag.id
               )
Tagging.create!(
               note_id: interesting_facts_note.id,
               tag_id: feline_tag.id
               )
Tagging.create!(
              note_id: interesting_facts_note.id,
              tag_id: cat_tag.id
              )
Tagging.create!(
              note_id: interesting_facts_note.id,
              tag_id: facts_tag.id
              )
Tagging.create!(
              note_id: interesting_facts_note.id,
              tag_id: school_tag.id
              )


welcome_note = Note.create!(
                         title: "Welcome To NoteAry",
                         body: '<p><span style="color: rgb(0, 138, 0); font-size: 32px;">NoteAry is a rich text editor that is based off of Evernote.</span></p><p><br></p><p><span style="font-size: 18px;">Below you can see how the home page is laid out. To the left is the </span><span style="color: rgb(230, 0, 0); font-size: 18px;">Side Bar</span><span style="font-size: 18px;">, which holds most of your controls for navigating around your notes. To the right is the </span><span style="color: rgb(230, 0, 0); font-size: 18px;">Notes List</span><span style="font-size: 18px;">, where holds all your </span><span style="color: rgb(230, 0, 0); font-size: 18px;">notes</span><span style="font-size: 18px;">, or </span><span style="color: rgb(0, 102, 204); font-size: 18px;">filtered notes</span><span style="font-size: 18px;">. </span></p>',
                         author_id: demo.id,
                         notebook_id: school_notes.id
                         )
Tagging.create!(
               note_id: welcome_note.id,
               tag_id: school_tag.id
               )
Tagging.create!(
             note_id: welcome_note.id,
             tag_id: noteary_tag.id
             )
Tagging.create!(
             note_id: welcome_note.id,
             tag_id: aa_tag.id
             )
Tagging.create!(
             note_id: welcome_note.id,
             tag_id: fullstack_tag.id
             )



essay_note = Note.create!(
                        title: "How to write an essay",
                        body: '<p><br></p><p><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);"><img src="http://lklivingston.tripod.com/essay/title.gif" alt="Guide to Writing a Basic Essay"></span></p><h1><span style="font-size: 2em; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Use this Sample Basic Essay as a Model</span></h1><p><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">	The essay below demonstrates the principles of writing a basic essay. The different parts of the essay have been labeled. The thesis statement is in bold, the topic sentences are in italics, and each main point is underlined. When you write your own essay, of course, you will not need to mark these parts of the essay unless your teacher has asked you to do so. They are marked here just so that you can more easily identify them.</span></p><p><br></p><p><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">	"A dog is mans best friend." That common saying may contain some truth, but dogs are not the only animal friend whose companionship people enjoy. For many people, a cat is their best friend.&nbsp;Despite what dog lovers may believe, cats make excellent housepets as they are good companions, they are civilized members of the household, and they are easy to care for.</span></p><p><em style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">In the first place, people enjoy the companionship of cats.</em><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Many cats are affectionate.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;They will snuggle up and ask to be petted, or scratched under the chin. Who can resist a purring cat?&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">If theyre not feeling affectionate, cats are generally quite playful.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;They love to chase balls and feathers, or just about anything dangling from a string. They especially enjoy playing when their owners are participating in the game.&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Contrary to popular opinion, cats can be trained.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;Using rewards and punishments, just like with a dog, a cat can be trained to avoid unwanted behavior or perform tricks. Cats will even fetch!</span></p><p><br></p><p><em style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">	In the second place, cats are civilized members of the household.</em><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Unlike dogs, cats do not bark or make other loud noises.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;Most cats dont even meow very often. They generally lead a quiet existence.&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Cats also dont often have "accidents."</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;Mother cats train their kittens to use the litter box, and most cats will use it without fail from that time on. Even stray cats usually understand the concept when shown the box and will use it regularly.&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Cats do have claws, and owners must make provision for this.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;A tall scratching post in a favorite cat area of the house will often keep the cat content to leave the furniture alone. As a last resort, of course, cats can be declawed.</span></p><p><em style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Lastly, one of the most attractive features of cats as housepets is their ease of care.</em><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Cats do not have to be walked.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;They get plenty of exercise in the house as they play, and they do their business in the litter box. Cleaning a litter box is a quick, painless procedure.&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">Cats also take care of their own grooming.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;Bathing a cat is almost never necessary because under ordinary circumstances cats clean themselves. Cats are more particular about personal cleanliness than people are.&nbsp;</span><u style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">In addition, cats can be left home alone for a few hours without fear.</u><span style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: rgb(0, 0, 0);">&nbsp;Unlike some pets, most cats will not destroy the furnishings when left alone. They are content to go about their usual activities until their owners return.</span></p>',
                        author_id: demo.id,
                        notebook_id: school_notes.id
                        )

Tagging.create!(
               note_id: essay_note.id,
               tag_id: school_tag.id
               )
Tagging.create!(
             note_id: essay_note.id,
             tag_id: facts_tag.id
             )
Tagging.create!(
             note_id: essay_note.id,
             tag_id: aa_tag.id
             )
Tagging.create!(
             note_id: essay_note.id,
             tag_id: fullstack_tag.id
             )

todo_note = Note.create!(
                        title: "To Do List",
                        body: '<p><span style="font-size: 32px; font-family: monospace;">I need one :(</span></p>',
                        author_id: demo.id,
                        notebook_id: to_do_list.id
                        )
Tagging.create!(
             note_id: todo_note.id,
             tag_id: list_tag.id
             )

dept_store = Note.create!(title: "Department Store", body: "<ol><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Hammer</span></li><li><span style=\"font-size: 32px; color: rgb(230, 0, 0);\">Sword</span></li><li><span style=\"font-size: 32px; background-color: rgb(255, 255, 255); color: rgb(0, 138, 0);\">Trash Can</span></li></ol>", author_id: demo.id, notebook_id: to_do_list.id)
supermarket = Note.create!(title: "Supermarket", body: "<p><strong style=\"font-size: 32px;\">Milk, Cereal, Yogurt, Ice</strong></p>", author_id: demo.id, notebook_id: to_do_list.id)
morning = Note.create!(title: "Morning time", body: "<p>Clean bathroom, Wash Car</p>", author_id: demo.id, notebook_id: to_do_list.id)
afternoon = Note.create!(title: "Afternoon", body: "<p>Pick up dry cleaning</p>", author_id: demo.id, notebook_id: to_do_list.id)
evening = Note.create!(title: "Evening", body: "<p>Dinner!</p>", author_id: demo.id, notebook_id: to_do_list.id)
final = Note.create!(title: "Final", body: "<p><strong style=\"font-size: 32px;\"><u>uhhh????</u></strong></p>", author_id: demo.id, notebook_id: school_notes.id)




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
