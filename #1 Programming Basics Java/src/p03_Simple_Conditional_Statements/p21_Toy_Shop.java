package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p21_Toy_Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double razhod = Double.parseDouble(scanner.nextLine());
        double puzeli = Double.parseDouble(scanner.nextLine());
        double kukli = Double.parseDouble(scanner.nextLine());
        double mecheta = Double.parseDouble(scanner.nextLine());
        double minions = Double.parseDouble(scanner.nextLine());
        double kamioni = Double.parseDouble(scanner.nextLine());

        double broi = puzeli + kukli + mecheta + minions + kamioni;

        double income = puzeli * 2.60 + kukli * 3 + mecheta * 4.1 + minions * 8.20 + kamioni * 2;

        if (broi >= 50) {
            income = income * 0.75;
        }

        double finalIncome = income - (income * 0.1);

        if (finalIncome >= razhod) {
            System.out.printf("Yes! %.2f lv left.", finalIncome - razhod);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", Math.abs(razhod - finalIncome));
        }
    }
}