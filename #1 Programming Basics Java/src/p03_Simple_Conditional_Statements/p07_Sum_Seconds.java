package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p07_Sum_Seconds {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer first = Integer.parseInt(input.nextLine());
        Integer seconds = Integer.parseInt(input.nextLine());
        Integer third = Integer.parseInt(input.nextLine());

        Integer sumSeconds = first + seconds + third;
        Integer minutes = sumSeconds / 60;
        Integer leftSeconds = sumSeconds % 60;

        if (leftSeconds < 10) {
            System.out.printf("%d:0%d", minutes,leftSeconds);
        }
        else {
            System.out.printf("%d:%d", minutes,leftSeconds);
        }
    }
}
