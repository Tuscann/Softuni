package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p02_Small_Shop {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String product = input.nextLine().toLowerCase();
        String city = input.nextLine().toLowerCase();
        Double quantity = Double.parseDouble(input.nextLine());

        Double prise = 0.0;

        switch (city) {
            case "sofia":
                switch (product) {
                    case "coffee":
                        prise = 0.5;
                        break;
                    case "water":
                        prise = 0.8;
                        break;
                    case "beer":
                        prise = 1.20;
                        break;
                    case "sweets":
                        prise = 1.45;
                        break;
                    case "peanuts":
                        prise = 1.6;
                        break;
                }
                break;
            case "plovdiv":
                switch (product) {
                    case "coffee":
                        prise = 0.4;
                        break;
                    case "water":
                        prise = 0.7;
                        break;
                    case "beer":
                        prise = 1.15;
                        break;
                    case "sweets":
                        prise = 1.3;
                        break;
                    case "peanuts":
                        prise = 1.5;
                        break;
                }
                break;
            case "varna":
                if (product.equals("coffee")) {
                    prise = 0.45;
                } else if (product.equals("water")) {
                    prise = 0.7;
                } else if (product.equals("beer")) {
                    prise = 1.1;
                } else if (product.equals("sweets")) {
                    prise = 1.35;
                } else if (product.equals("peanuts")) {
                    prise = 1.55;
                }
                break;
        }
        System.out.printf("%f",prise*quantity);
    }
}
