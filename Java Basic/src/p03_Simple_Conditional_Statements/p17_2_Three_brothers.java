package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p17_2_Three_brothers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double first = Double.parseDouble(input.nextLine());
        double second = Double.parseDouble(input.nextLine());
        double third = Double.parseDouble(input.nextLine());
        double father = Double.parseDouble(input.nextLine());

        double timeWithRest = 1 / (1 / first + 1 / second + 1 / third) * 1.15;
        double time = father - timeWithRest;

        System.out.printf("Cleaning time: %.2f\n",timeWithRest);

        if (time > 0) {
            System.out.printf("Yes, there is a surprise - time left -> %.0f hours.", Math.floor(time));
        } else {
            System.out.printf("No, there isn't a surprise - shortage of time -> %.0f hours.", Math.abs(Math.floor(time)));
        }
    }
}
