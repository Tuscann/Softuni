package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p04_Fruit_or_Vegetable {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String something=input.nextLine();

        switch (something) {
            case "banana":
            case "apple":
            case "kiwi":
            case "cherry":
            case "lemon":
            case "grapes":
                System.out.print("fruit");
                break;
            case "tomato":
            case "cucumber":
            case "pepper":
            case "carrot":
                System.out.print("vegetable");
                break;
            default:
                System.out.print("unknown");
                break;
        }
    }
}
