package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p09_Password_Guess {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String str = input.nextLine();

        if (str.equals("s3cr3t!P@ssw0rd")) {
            System.out.println("Welcome");
        } else {
            System.out.println("Wrong password!");
        }
    }
}
