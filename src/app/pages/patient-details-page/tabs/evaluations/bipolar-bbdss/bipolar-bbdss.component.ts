import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";

@Component({
  selector: 'app-bipolar-bbdss',
  templateUrl: './bipolar-bbdss.component.html',
  styleUrls: ['./bipolar-bbdss.component.scss']
})
export class BipolarBbdssComponent implements OnInit {

  evaluationDto: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.BBDSS,
    evaluationResponses: [
      {prompt: "Hostility", answer: ""},
      {prompt: "Elevated Mood", answer: ""},
      {prompt: "Grandiosity", answer: ""},
      {prompt: "Depression", answer: ""},
      {prompt: "Anxiety", answer: ""},
      {prompt: "Unusual Thought Content", answer: ""},
      {prompt: "Excitement", answer: ""},
      {prompt: "Motor Hyperactivity", answer: ""},
      {prompt: "Emotional Withdrawal", answer: ""},
      {prompt: "Blunted Affect", answer: ""}
    ]
  };

  bipolarQuestionsMap = new Map<string, string>();

  private evaluationScaleMap = new Map<string, string[]>();
  private evaluationLongDescriptionMap = new Map<string, string>();
  private subscaleMap = new Map<string, string[]>();

  displayDialog: boolean = false;
  dialogKey: string;
  dialogScaleDescriptions: string[];
  dialogLongDescription: string;

  constructor() {

    this.bipolarQuestionsMap.set("Hostility", "Animosity, contempt, belligerence, threats, arguments, tantrums, property destruction, fights and any other expression of hostile attitudes or actions. Do not infer hostility from neurotic defenses, anxiety or somatic complaints. Do not include incidents of appropriate anger or obvious self-defense.");
    this.bipolarQuestionsMap.set("Elevated Mood", "A pervasive, sustained and exaggerated feeling of well-being, cheerfulness, euphoria (implying a pathological mood), optimism that is out of proportion to the circumstances. Do not infer elation from increased activity or from grandiose statements alone.");
    this.bipolarQuestionsMap.set("Grandiosity", "Exaggerated self-opinion, self-enhancing conviction of special abilities or powers or identity as someone rich or famous. Rate only patient's statements about himself, not his demeanor. Note: If the subject rates a \"5\" or \"6\" due to grandiose delusions, you must rate Unusual Thought Content at least a \"3\" or above.");
    this.bipolarQuestionsMap.set("Depression", "Include sadness, unhappiness, anhedonia, and preoccupation with depressing topics (can't attend to TV, conversations due to depression), hopelessness, loss of self-esteem (dissatisfied or disgusted with self or feelings of worthlessness). Do not include vegetative symptoms, e.g., motor retardation, early waking, or the a motivation that accompanies the deficit syndrome.");
    this.bipolarQuestionsMap.set("Anxiety", "Reported apprehension, tension, fear, panic or worry. Rate only the patient's statements, not observed anxiety that is rated under TENSION.");
    this.bipolarQuestionsMap.set("Unusual Thought Content", "Unusual, odd, strange or bizarre thought content. Rate the degree of unusualness, not the degree of disorganization of speech. Delusions are patently absurd, clearly false or bizarre ideas that are expressed with full conviction. Consider the patient to have full conviction if he/she has acted as though the delusional belief were true. Ideas of reference/persecution can be differentiated from delusions in that ideas are expressed with much doubt and contain more elements of reality. Include thought insertion, withdrawal and broadcast. Include grandiose, somatic and persecutory delusions even if rated elsewhere. Note: If Somatic Concern, Guilt, Suspiciousness, or Grandiosity are rated \"5\" or \"6\" due to delusions, then Unusual Thought Content must be rated a \"3\" or above.");
    this.bipolarQuestionsMap.set("Excitement", "Heightened emotional tone, or increased emotional reactivity to interviewer or topics being discussed, as evidenced by increased intensity of facial expressions, voice tone, expressive gestures or increase in speech quantity and speed.");
    this.bipolarQuestionsMap.set("Motor Hyperactivity", "Increase in energy level evidenced in more frequent movement and/or rapid speech. Do not rate if restlessness is due to akathisia.");
    this.bipolarQuestionsMap.set("Emotional Withdrawal", "Deficiency in patient's ability to relate emotionally during interview situation. Use your own feeling as to the presence of an \"invisible barrier\" between patient and interviewer. Include withdrawal apparently due to psychotic processes.");
    this.bipolarQuestionsMap.set("Blunted Affect", "Restricted range in emotional expressiveness of face, voice, and gestures. Marked indifference or flatness even when discussing distressing topics. In the case of euphoric or dysphoric patients, rate Blunted Affect if a flat quality is also clearly present.");

    this.evaluationLongDescriptionMap.set("Hostility", "How have you been getting along with people (family, co-workers, etc.)? Have you been irritable or grumpy lately? (How do you show it? Do you keep it to yourself?) Were you ever so irritable that you would shout at people or start fights or arguments? (Have you found yourself yelling at people you didn't know?) Have you hit anyone recently?");
    this.evaluationLongDescriptionMap.set("Elevated Mood", "Have you felt so good or high that other people thought that you were not your normal self? Have you been feeling cheerful and \"on top of the world\" without any reason? [If patient reports elevated mood/euphoria, ask the following]: Did it seem like more than just feeling good? How long did that last?");
    this.evaluationLongDescriptionMap.set("Grandiosity", "Is there anything special about you? Do you have any special abilities or powers? Have you thought that you might be somebody rich or famous? [If the patient reports any grandiose ideas/delusions, ask the following]: How often have you been thinking about [use patient's description]? Have you told anyone about what you have been thinking? Have you acted on any of these ideas?");
    this.evaluationLongDescriptionMap.set("Depression", "How has your mood been recently? Have you felt depressed (sad, down, unhappy as if you didn't care)? Are you able to switch your attention to more pleasant topics when you want to? Do you find that you have lost interest in or get less pleasure from things you used to enjoy, like family, friends, hobbies, watching TV, eating? [If subject reports feelings of depression, ask the following]: How long do these feelings last? Has it interfered with your ability to perform your usual activities/work?");
    this.evaluationLongDescriptionMap.set("Anxiety", "Have you been worried a lot during [mention time frame]? Have you been nervous or apprehensive? (What do you worry about?) Are you concerned about anything? How about finances or the future? When you are feeling nervous, do your palms sweat or does your heart beat fast (or shortness of breath, trembling, choking)? [If patient reports anxiety or autonomic accompaniment, ask the following]; How much of the time have you been [use patient's description]? Has it interfered with your ability to perform your usual activities/work?");
    this.evaluationLongDescriptionMap.set("Unusual Thought Content", "Have you been receiving any special messages from people or from the way things are arranged around you? Have you seen any references to yourself on TV or in the newspapers? Can anyone read your mind? Do you have a special relationship with God? Is anything like electricity, X-rays, or radio waves affecting you? Are thoughts put into your head that are not your own? Have you felt that you were under the control of another person or force? [If patient reports any odd ideas/delusions, ask the following]: How often do you think about [use patient's description]? Have you told anyone about these experiences? How do you explain the things that have been happening [specify]?");
    this.evaluationLongDescriptionMap.set("Excitement", "");
    this.evaluationLongDescriptionMap.set("Motor Hyperactivity", "");
    this.evaluationLongDescriptionMap.set("Emotional Withdrawal", "");
    this.evaluationLongDescriptionMap.set("Blunted Affect", "Use the following probes at end of interview to assess emotional responsiveness: Have you heard any good jokes lately? Would you like to hear a joke?");

    this.evaluationScaleMap.set("Hostility", ["Irritable or grumpy, but not overtly expressed.", "Argumentative or sarcastic.", "Overtly angry on several occasions OR yelled at others excessively.", "Has threatened, slammed about or thrown things.", "Has assaulted others but with no harm likely, e.g., slapped or pushed, OR destroyed property, e.g., knocked over furniture, broken windows.", "Has attacked others with definite possibility of harming them or with actual harm, e.g., assault with hammer or weapon."]);
    this.evaluationScaleMap.set("Elevated Mood", ["Seems to be very happy, cheerful without much reason.", "Some unaccountable feelings of well-being that persist.", "Reports excessive or unrealistic feelings of well-being, cheerfulness, confidence or optimism inappropriate to circumstances, some of the time. May frequently joke, smile, be giddy or overly enthusiastic OR few instances of marked elevated mood with euphoria.", "Reports excessive or unrealistic feelings of well-being, confidence or optimism inappropriate to circumstances much of the time. May describe \"feeling on top of the world\", \"like everything is falling into place\" or \"better than ever before\" OR several instances of marked elevated mood with euphoria.", "Reports many instances of marked elevated mood with euphoria OR mood definitely elevated almost constantly throughout interview and inappropriate to content.", "Patient reports being elated or appears almost intoxicated, laughing, joking, giggling, constantly euphoric, feeling invulnerable, all inappropriate to immediate circumstances."]);
    this.evaluationScaleMap.set("Grandiosity", ["Feels great and denies obvious problems, but not unrealistic.", "Exaggerated self-opinion beyond abilities and training.", "Inappropriate boastfulness, claims to be brilliant, insightful, or gifted beyond realistic proportions, but rarely self-discloses or acts on these inflated self-concepts. Does not claim that grandiose accomplishments have actually occurred.", "Same as 3 but often self-discloses and acts on these grandiose ideas. May have doubts about the reality of the grandiose ideas. Not delusional.", "Delusional&mdash;claims to have special powers like ESP, to have millions of dollars, invented new machines, worked at jobs when it is known that he was never employed in these capacities, be Jesus Christ, or the President. Patient may not be very preoccupied.", "Delusional - Same as 5 but subject seems very preoccupied and tends to disclose or act on grandiose delusions."]);
    this.evaluationScaleMap.set("Depression", ["Occasionally feels sad, unhappy or depressed.", "Frequently feels sad or unhappy but can readily turn attention to other things.", "Frequent periods of feeling very sad, unhappy, moderately depressed, but able to function with extra effort.", "Frequent, but not daily, periods of deep depression OR some areas of functioning are disrupted by depression.", "Deeply depressed daily but not persisting throughout the day OR many areas of functioning are disrupted by depression.", "Deeply depressed daily OR most areas of functioning are disrupted by depression."]);
    this.evaluationScaleMap.set("Anxiety", ["Reports some discomfort due to worry OR infrequent worries that occur more than usual for most normal individuals.", "Worried frequently but can readily turn attention to other things.", "Worried most of the time and cannot turn attention to other things easily but no impairment in functioning OR occasional anxiety with autonomic accompaniment but no impairment in functioning.", "Frequent, but not daily, periods of anxiety with autonomic accompaniment, OR some areas of functioning are disrupted by anxiety or worry.", "Anxiety with autonomic accompaniment daily but not persisting throughout the day OR many areas of functioning are disrupted by anxiety or constant worry.", "Anxiety with autonomic accompaniment persisting throughout the day OR most areas of functioning are disrupted by anxiety or constant worry."]);
    this.evaluationScaleMap.set("Unusual Thought Content", ["Ideas of reference (people may stare or may laugh at him), ideas of persecution (people may mistreat him). Unusual beliefs in psychic powers, spirits, UFOs, or unrealistic beliefs in one's own abilities. Not strongly held. Some doubt.", "Same as 1, but degree of reality distortion is more severe as indicated by highly unusual ideas or greater conviction. Content may be typical of delusions (even bizarre), but without full conviction. The delusion does not seem to have fully formed, but is considered as one possible explanation for an unusual experience.", "Delusion present but no preoccupation or functional impairment. May be an encapsulated delusion or a firmly endorsed absurd belief about past delusional circumstances.", "Full delusion(s) present with some preoccupation OR some areas of functioning disrupted by delusional thinking.", "Full delusion(s) present with much preoccupation OR many areas of functioning are disrupted by delusional thinking.", "Full delusions present with almost total preoccupation OR most areas of functioning are disrupted by delusional thinking."]);
    this.evaluationScaleMap.set("Excitement", ["Subtle and fleeting or questionable increase in emotional intensity. For example, at times, seems keyed-up or overly alert.", "Subtle but persistent increase in emotional intensity. For example, lively use of gestures and variation in voice tone.", "Definite but occasional increase in emotional intensity. For example, reacts to interviewer or topics that are discussed with noticeable emotional intensity. Some pressured speech.", "Definite and persistent increase in emotional intensity. For example, reacts to many stimuli, whether relevant or not, with considerable emotional intensity. Frequent pressured speech.", "Marked increase in emotional intensity. For example reacts to most stimuli with inappropriate emotional intensity. Has difficulty settling down or staying on task. Often restless, impulsive, or speech is often pressured.", "Marked and persistent increase in emotional intensity. Reacts to all stimuli with inappropriate intensity, impulsiveness. Cannot settle down or stay on task. Very restless and impulsive most of the time. Constant pressured speech."]);
    this.evaluationScaleMap.set("Motor Hyperactivity", ["Some restlessness, difficulty sitting still, lively facial expressions, or somewhat talkative.", "Occasionally very restless, definite increase in motor activity, lively gestures, 1-3 brief instances of pressured speech.", "Very restless, fidgety, excessive facial expressions or nonproductive and repetitious motor movements. Much pressured speech, up to one third of the interview.", "Frequently restless, fidgety. Many instances of excessive non-productive and repetitious motor movements. On the move most of the time. Frequent pressured speech, difficult to interrupt. Rises on 1-2 occasions to pace.", "Excessive motor activity, restlessness, fidgety, loud tapping, noisy, etc., throughout most of the interview. Speech can only be interrupted with much effort. Rises on 3-4 occasions to pace.", "Constant excessive motor activity throughout entire interview, e.g., constant pacing, constant pressured speech with no pauses, interviewee can only be interrupted briefly and only small amounts of relevant information can be obtained."]);
    this.evaluationScaleMap.set("Emotional Withdrawal", ["Lack of emotional involvement shown by occasional failure to make reciprocal comments, occasionally appearing preoccupied, or smiling in a stilted manner, but spontaneously engages the interviewer most of the time.", "Lack of emotional involvement shown by noticeable failure to make reciprocal comments, appearing preoccupied, or lacking in warmth, but responds to interviewer when approached.", "Emotional contact not present much of the interview because subject does not elaborate responses, fails to make eye contact, doesn't seem to care if interviewer is listening, or may be preoccupied with psychotic material.", "Same as \"3\" but emotional contact not present most of the interview.", "Actively avoids emotional participation. Frequently unresponsive or responds with yes/no answers (not solely due to persecutory delusions). Responds with only minimal affect.", "Consistently avoids emotional participation. Unresponsive or responds with yes/no answers (not solely due to persecutory delusions). May leave during interview or just not respond at all."]);
    this.evaluationScaleMap.set("Blunted Affect", ["Emotional range is slightly subdued or reserved but displays appropriate facial expressions and tone of voice that are within normal limits.", "Emotional range overall is diminished, subdued, or reserved, without many spontaneous and appropriate emotional responses. Voice tone is slightly monotonous.", "Emotional range is noticeably diminished, patient doesn't show emotion, smile, or react to distressing topics except infrequently. Voice tone is monotonous or there is noticeable decrease in spontaneous movements. Displays of emotion or gestures are usually followed by a return to flattened affect.", "Emotional range very diminished, patient doesn't show emotion, smile or react to distressing topics except minimally, few gestures, facial expression does not change very often. Voice tone is monotonous much of the time.", "Very little emotional range or expression. Mechanical in speech and gestures most of the time. Unchanging facial expression. Voice tone is monotonous most of the time.", "Virtually no emotional range or expressiveness, stiff movements. Voice tone is monotonous all of the time."]);

    this.subscaleMap.set("manic", ["Hostility", "Elevated Mood", "Grandiosity", "Excitement", "Motor Hyperactivity"]);
    this.subscaleMap.set("depressed", ["Depression", "Anxiety", "Emotional Withdrawal", "Blunted Affect"]);
    this.subscaleMap.set("psychotic", ["Unusual Thought Content"]);
  }

  ngOnInit() {
  }

  openScaleDetails(key: string) {
    this.dialogKey = key;
    this.dialogScaleDescriptions = this.evaluationScaleMap.get(key);
    this.dialogLongDescription = this.evaluationLongDescriptionMap.get(key);
    this.displayDialog = true;
  }

  calculateSubscale(evaluationResponses: EvaluationResponseDto[], subscale: string): number {

    let subscaleEvaluationResponses: EvaluationResponseDto[] = [];
    let subscaleQuestions = this.subscaleMap.get(subscale);

    for(let evaluationResponse of evaluationResponses) {
      if(subscaleQuestions.includes(evaluationResponse.prompt)) {
        subscaleEvaluationResponses.push(evaluationResponse);
      }
    }

    return this.calculateTotal(subscaleEvaluationResponses)/subscaleEvaluationResponses.length;

  }

  calculateTotal(evaluationResponses: EvaluationResponseDto[]): number {
    let total: number = 0;
    for(let evaluationResponse of evaluationResponses) {
      total += +evaluationResponse.answer;
    }

    return total;
  }

}
