package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p16_Number_0_100_to_Text {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());

        String[] array = new String[]{"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
        String[] beginning = new String[]{"ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred"};
        String[] end = new String[]{"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

        if (n >= 0 && n <= 100) {
            if (n < 10 && n >= 0) {
                System.out.print(end[n]);
            } else if (n < 20 && n >= 0) {
                System.out.print(array[n - 10]);
            } else if (n >= 20 && n % 10 == 0) {
                int b = n / 10 - 1;
                System.out.print(beginning[b]);
            } else if (n > 20 && n < 100 && n % 10 != 0) {
                int c = n % 10;
                int d = n / 10 - 1;

                System.out.printf("%s %s", beginning[d], end[c]);
            }
        }
        else {
            System.out.print("invalid number");
        }
    }
}
