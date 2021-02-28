export class CodeTest {
  code: string[];
  attemptedAnswer: number[] = [];
  rightAnswer: number[] = [];
}

export const QUESTIONS: CodeTest[] = [
  {
    code: [
      'public class Test ',
      '{ ',
      '  public static void main(String argv[])',
      '   { ',
      '     int[] arr = new int[]{1,2,3};',
      '     System.out.println(arr[1]); ',
      '   } ',
      '}',
    ],
    attemptedAnswer: [],
    rightAnswer: [2, 4],
  },
  {
    code: [
      'public class Test',
      '{',
      ' public static void main(String[] args)',
      ' {',
      '  int j = 5;',
      '  for (int i = 0; i< j; i++)',
      '  {',
      '    if ( i <= j-- )',
      '       System.out.print(  (i*j)  + " ");',
      '  }',
      ' }',
      '}',
    ],
    attemptedAnswer: [],
    rightAnswer: [1, 2, 5],
  },
];
