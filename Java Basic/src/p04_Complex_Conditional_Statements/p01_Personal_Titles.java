package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p01_Personal_Titles {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double age = Double.parseDouble(input.nextLine());
        String gender = input.nextLine();

        if (age < 16) {
            if (gender.equals("m")) {
                System.out.print("Master");
            } else if (gender.equals("f")) {
                System.out.print("Miss");
            }
        } else {
            if (gender.equals("m")) {
                System.out.print("Mr.");
            } else if (gender.equals("f")) {
                System.out.print("Ms.");
            }
        }
    }
}
