export var problems = {
    problems: [
        {
            name: "Physiological", questions: [
                { label: "Often have headaches", value: false, fieldname: "often_have_headaches" },
                { label: "Trouble with my eyes", value: false, fieldname: "trouble_with_eyes" },
                { label: "Can't hear well", value: false, fieldname: "cant_hear_well" },
                { label: "Have trouble with my teeth", value: false, fieldname: "trouble_with_teeth" },
                { label: "Don't get enougth sleep", value: false, fieldname: "dont_get_enough_sleep" },
                { label: "Getting tired too easily", value: false, fieldname: "tired_too_easily" },
                { label: "Often get sick and not healthy", value: false, fieldname: "often_get_sick" },
                { label: "Not eating the right food", value: false, fieldname: "not_eating_right_food" },
                { label: "Bothered by physically disability", value: false, fieldname: "bothered_by_disability" },
            ]
        },
        {
            name: "Financial", questions: [
                { label: "Having no regular allowance", value: false, fieldname: "no_regular_allowance" },
                { label: "Financial dependence on others", value: false, fieldname: "financial_dependance_onOthers" },
                { label: "Family worried about money", value: false, fieldname: "family_worried_about_money" },
                { label: "Parents working too hard", value: false, fieldname: "parents_working_too_hard" },
                { label: "Thinking of leaving college to look for a job", value: false, fieldname: "dropout_college_forJob" },
            ]
        },
        {
            name: "Social and Reacreational Activities", questions: [
                { label: "Not allowed to go out with someone I like", value: false, fieldname: "strict_parents" },
                { label: "Too little chance to do what I want to", value: false, fieldname: "cant_do_what_iwant" },
                { label: "Feeling uncomfortable with other people", value: false, fieldname: "uncomfi_with_otherpeople" },
                { label: "Not using my time well", value: false, fieldname: "not_using_my_timewell" },
                { label: "Too little time for myself", value: false, fieldname: "little_time_onmyself" },
                { label: "Smoking", value: false, fieldname: "smoking" },
                { label: "Drinking liquor", value: false, fieldname: "drinking" },
                { label: "Getting hooked on computers", value: false, fieldname: "addicted_on_computers" },
            ]
        },
        {
            name: "Courtship, Sex and Marriage", questions: [
                { label: "Feels embarrassed when talking about sex", value: false, fieldname: "shy_when_talking_aboutsex" },
                { label: "Not sure about proper sex behavior", value: false, fieldname: "dont_know_proper_sexBehavior" },
                { label: "Thinking too much about sex", value: false, fieldname: "thinking_toomuch_about_sex" },
                { label: "Being too jealous and envious to others", value: false, fieldname: "too_jealous_envious_to_others" },
                { label: "Sometimes wishing I were a boy/girl", value: false, fieldname: "wishing_im_boyORgirl" },
                { label: "Being in love", value: false, fieldname: "inlove" },
                { label: "Wondering if I'll get married", value: false, fieldname: "doubt_about_getting_married" },
                { label: "Problems with boyfriend/girlfriend", value: false, fieldname: "problems_with_bfgf" },
            ]
        },
        {
            name: "Social Psychological Relations", questions: [
                { label: "Being timid or shy", value: false, fieldname: "timid_or_shy" },
                { label: "Get hurt easily", value: false, fieldname: "hurt_easily" },
                { label: "Nobody to share my problems with", value: false, fieldname: "nobody_to_share_my_problems" },
                { label: "Being childish or immature", value: false, fieldname: "childish_immature" },
                { label: "Cannot get along with other people", value: false, fieldname: "introvert" },
                { label: "Having friends with negative or bad influences", value: false, fieldname: "bad_influence_friends" },
                { label: "Being the subject of teasing", value: false, fieldname: "subject_of_teasing" },
            ]
        },
        {
            name: "Peronal Psychological Relations", questions: [
                { label: "Worrying too much", value: false, fieldname: "worrying_too_much" },
                { label: "Being nervous", value: false, fieldname: "being_nervous" },
                { label: "Gets discouraged easily", value: false, fieldname: "discouraged_easily" },
                { label: "Daydreaming", value: false, fieldname: "daydreaming" },
                { label: "Being lazy", value: false, fieldname: "being_lazy" },
                { label: "Having memories of an unhappy childhood", value: false, fieldname: "memories_of_unhappy_childhood" },
                { label: "Wishing I'd never been born", value: false, fieldname: "never_been_born" },
                { label: "Being materialistic", value: false, fieldname: "materialistic" },
                { label: "Getting too dependent on electronic gadgets", value: false, fieldname: "dependent_gadgets" },
                { label: "Difficulty setting my priorities", value: false, fieldname: "difficulty_setting_priorities" },
                { label: "Having low self esteem", value: false, fieldname: "low_self_esteem" },
            ]
        },
        {
            name: "Morals and Religion", questions: [
                { label: "Losing my temper", value: false, fieldname: "losing_my_temper" },
                { label: "Not going to church often enough", value: false, fieldname: "not_going_to_church" },
                { label: "Having guilty conscience", value: false, fieldname: "guilty_conscience" },
                { label: "Wanting to feel close to God", value: false, fieldname: "wanting_to_close_to_god" },
                { label: "Confused in some of my religious beliefs", value: false, fieldname: "confused_religious_beliefs" },
                { label: "Wanting to know and understand the Bible", value: false, fieldname: "wanting_know_bible" },
                { label: "Having bad attitudes or habits", value: false, fieldname: "bad_attitudes_habits" },
            ]
        },
        {
            name: "Curriculum and Teaching Procedures", questions: [
                { label: "Teachers hard to understand", value: false, fieldname: "teachers_hard_to_understand" },
                { label: "Not getting along with the teacher", value: false, fieldname: "not_getting_along" },
                { label: "Textbooks/lessons hard to understand", value: false, fieldname: "lesson_hard_to_understand" },
                { label: "Difficulty using media based technology", value: false, fieldname: "hard_using_media_tech" },
                { label: "Problems with my subject/s", value: false, fieldname: "problems_with_subjects" },
            ]
        },
        {
            name: "Home and Family", questions: [
                { label: "Worried about someone in the family", value: false, fieldname: "worried_about_someone_fam" },
                { label: "Family quarrels", value: false, fieldname: "family_quarrels" },
                { label: "Death in the family", value: false, fieldname: "death_fam" },
                { label: "Problem about mother", value: false, fieldname: "prob_mom" },
                { label: "Problem about father", value: false, fieldname: "prob_dad" },
                { label: "Parents having favorites in the family", value: false, fieldname: "parents_fav_family" },
                { label: "Being treated like a child", value: false, fieldname: "treated_like_child" },
                { label: "Parents are strict", value: false, fieldname: "parents_stict" },
                { label: "Parents expecting too much from me", value: false, fieldname: "parents_expecting_much" },
                { label: "Parents making too much decision for me", value: false, fieldname: "parents_decision_for_me" },
                { label: "Not living with parents", value: false, fieldname: "not_living_with_parents" },
                { label: "Feeling I don't really have home", value: false, fieldname: "feel_dont_have_home" },
                { label: "Wanting to run away from home", value: false, fieldname: "want_to_run_away_from_home" },
                { label: "Getting homesick", value: false, fieldname: "homesick" },
                { label: "Parents are separated", value: false, fieldname: "parents_separated" },

            ]
        },
        {
            name: "Education and Vocation", questions: [
                { label: "Wanting to know more about trades/skills", value: false, fieldname: "want_know_more_skills" },
                { label: "Unable to express myself well in words", value: false, fieldname: "unable_to_express" },
                { label: "Wanting to drop from school", value: false, fieldname: "want_drop_school" },
                { label: "Losing enthusiasm with my studies", value: false, fieldname: "losing_enthusiams_studies" },

            ]
        },
        {
            name: "Adjustments to School Relations", questions: [
                { label: "Difficulty dealing with school rules and regulations", value: false, fieldname: "hard_obey_scohol_rules" },
                { label: "Having trouble with school personnel", value: false, fieldname: "trouble_with_personnel" },
                { label: "Afraid to speak in front of the class", value: false, fieldname: "afraid_speak_infront_class" },
                { label: "Not spending enough time in school work", value: false, fieldname: "no_time_for_schoolwork" },
                { label: "Hard to study in a boarding house", value: false, fieldname: "hardtostudy_in_boardinghouse" },
                { label: "Part-time student part-time worker", value: false, fieldname: "part_time_stud" },
                { label: "Difficulty in adjusting to school environment", value: false, fieldname: "hard_adjust_school_environment" },
            ]
        }
    ]
}