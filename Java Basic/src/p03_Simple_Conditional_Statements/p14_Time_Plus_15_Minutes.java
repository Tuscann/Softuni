package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p14_Time_Plus_15_Minutes {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int hour = Integer.parseInt(input.nextLine());
        int minutes = Integer.parseInt(input.nextLine());

        int total = hour * 60 + minutes + 15;
        Integer leftHours = total / 60;
        Integer leftMinutes = total % 60;

        if (leftHours == 24) {
            leftHours = 0;
        }
        if (leftMinutes <= 9) {
            System.out.printf("%d:0%d", leftHours, leftMinutes);
        } else {
            System.out.printf("%d:%d", leftHours, leftMinutes);
        }
    }
}
