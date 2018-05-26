package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p11_Equal_Words {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String first = input.nextLine().toLowerCase();
        String second = input.nextLine().toLowerCase();

        if (first.equals(second)) {
            System.out.print("yes");
        } else {
            System.out.print("no");
        }
    }
}
