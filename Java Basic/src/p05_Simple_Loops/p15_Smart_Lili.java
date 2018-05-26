package p05_Simple_Loops;

import java.util.Scanner;

public class p15_Smart_Lili {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Integer years = Integer.parseInt(console.nextLine());
        Double washingMachine = Double.parseDouble(console.nextLine());
        Integer toy = Integer.parseInt(console.nextLine());

        int evenCounter = 0;
        int oddCounter = 0;
        int moneyForBirthday = 10 / 2;

        for (Double i = 0.0; i < years; i++) {
            oddCounter = years / 2;
            if (years % 2 != 0) {
                oddCounter++;
            }
            evenCounter = years / 2;
        }

        Double sborNaChislata = 0.0;
        for (int j = 0; j <= years; j = j + 2) {
            sborNaChislata += j;
        }
        Double total = sborNaChislata * moneyForBirthday;

        Double totalPlus = oddCounter * (double) toy;

        Double savedMoney = total + totalPlus - evenCounter;

        if (savedMoney >= washingMachine) {
            System.out.printf("Yes! %.2f", savedMoney - washingMachine);

        } else {
            System.out.printf("No! %.2f", Math.abs(washingMachine - savedMoney));
        }
    }
}
