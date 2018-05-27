package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p07_Fruit_Shop {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String fruit = input.nextLine().toLowerCase();
        String day = input.nextLine().toLowerCase();
        Double quantity = Double.parseDouble(input.nextLine());

        Double price = -1.0;
        Boolean error = false;

        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                switch (fruit) {
                    case "banana":
                        price = 2.5;
                        break;
                    case "apple":
                        price = 1.2;
                        break;
                    case "orange":
                        price = 0.85;
                        break;
                    case "grapefruit":
                        price = 1.45;
                        break;
                    case "kiwi":
                        price = 2.7;
                        break;
                    case "pineapple":
                        price = 5.5;
                        break;
                    case "grapes":
                        price = 3.85;
                        break;
                    default:
                        error = true;
                        break;
                }
                break;
            case "saturday":
            case "sunday":
                switch (fruit) {
                    case "banana":
                        price = 2.7;
                        break;
                    case "apple":
                        price = 1.25;
                        break;
                    case "orange":
                        price = 0.9;
                        break;
                    case "grapefruit":
                        price = 1.6;
                        break;
                    case "kiwi":
                        price = 3.0;
                        break;
                    case "pineapple":
                        price = 5.6;
                        break;
                    case "grapes":
                        price = 4.2;
                        break;
                    default:
                        error = true;
                        break;
                }
                break;
            default:
                error = true;
                break;
        }

        if (error) {
            System.out.print("error");
        } else {
            System.out.printf("%.2f", price * quantity);
        }
    }
}
