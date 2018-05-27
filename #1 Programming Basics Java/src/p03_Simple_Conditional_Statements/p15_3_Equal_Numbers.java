package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p15_3_Equal_Numbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer first = Integer.parseInt(input.nextLine());
        Integer second = Integer.parseInt(input.nextLine());
        Integer third = Integer.parseInt(input.nextLine());

        if (first.equals(second) && second.equals(third)) {
            System.out.print("yes");
        } else {
            System.out.print("no");
        }
    }
}
