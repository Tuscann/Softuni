package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p10_Number_100_200 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Integer size = Integer.parseInt(scanner.nextLine());

        if (size < 100) {
            System.out.print("Less than 100");
        } else if (size <= 200) {
            System.out.print("Between 100 and 200");
        } else {
            System.out.print("Greater than 200");
        }
    }
}
