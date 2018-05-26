package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p19_2_Choreography {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double steps = Double.parseDouble(sc.nextLine());
        double dancers = Double.parseDouble(sc.nextLine());
        double days = Double.parseDouble(sc.nextLine());

        double stepsByDay = Math.ceil(100 / days);
        double stepsPerDancer = stepsByDay / dancers;

        if (stepsByDay <= 13) {
            System.out.printf("Yes, they will succeed in that goal! %.2f%%.", stepsPerDancer);
        } else {
            System.out.printf("No, They will not succeed in that goal! Required %.2f%% steps to be learned per day.", stepsPerDancer);
        }
    }
}
