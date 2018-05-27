package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p20_2_Harvest {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer x = Integer.parseInt(input.nextLine());
        Double y = Double.parseDouble(input.nextLine());
        Integer z = Integer.parseInt(input.nextLine());
        Integer workers = Integer.parseInt(input.nextLine());

        Double total = (0.4 * (x * y)) / 2.5;

        if (total >= z) {
            System.out.printf("Good harvest this year! Total wine: %.0f liters.\n", Math.floor(total));
            System.out.printf("%.0f liters left -> %.0f liters per person.", Math.ceil(total - z), Math.ceil((total - z) / workers));
        } else {
            System.out.printf("It will be a tough winter! More %.0f liters wine needed.", Math.floor(z - total));
        }
    }
}
