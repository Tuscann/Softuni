package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p03_Point_in_Rectangle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double x1 = Double.parseDouble(input.nextLine());
        Double y1 = Double.parseDouble(input.nextLine());
        Double x2 = Double.parseDouble(input.nextLine());
        Double y2 = Double.parseDouble(input.nextLine());
        Double x = Double.parseDouble(input.nextLine());
        Double y = Double.parseDouble(input.nextLine());

        if (x1 <= x && x <= x2 && y1 <= y && y <= y2) {
            System.out.print("Inside");
        } else {
            System.out.print("Outside");
        }
    }
}
