package p02_Simple_Calculations;

import java.util.Scanner;

public class p12_Currency_Converter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double USD = 1.79549;
        Double EUR = 1.95583;
        Double GBP = 2.53405;

        Double n = Double.parseDouble(input.nextLine());
        String first = input.nextLine();
        String secound = input.nextLine();
        Double moneyInleva = 0.0;
        Double MoneyInWanted = 0.00;

        switch (first) {
            case "USD":
                moneyInleva = n * USD;
                break;
            case "BGN":
                moneyInleva = n;
                break;
            case "EUR":
                moneyInleva = n * EUR;
                break;
            case "GBP":
                moneyInleva = n * GBP;
                break;
        }

        switch (secound) {
            case "USD":
                MoneyInWanted = moneyInleva / USD;
                break;
            case "EUR":
                MoneyInWanted = moneyInleva / EUR;
                break;
            case "GBP":
                MoneyInWanted = moneyInleva / GBP;
                break;
            case "BGN":
                MoneyInWanted = moneyInleva;
                break;
        }

        System.out.printf("%.2f EUR", MoneyInWanted);
    }
}
