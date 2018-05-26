package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p10_Animal_Type {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String animal = console.nextLine();

        switch (animal) {
            case "dog":
                System.out.println("mammal");
                break;
            case "crocodile":
            case "tortoise":
            case "snake":
                System.out.println("reptile");
            default:
                System.out.println("unknown");
        }
    }
}
