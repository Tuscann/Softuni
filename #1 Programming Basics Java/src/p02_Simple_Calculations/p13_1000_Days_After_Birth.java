package p02_Simple_Calculations;
import java.text.ParseException;
import java.text.SimpleDateFormat;  // 100/100
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class p13_1000_Days_After_Birth {
    public static void main(String[] args) throws ParseException {
        Scanner scanner = new Scanner(System.in);

        String ourDate = scanner.nextLine();
        SimpleDateFormat dateFormat = new SimpleDateFormat( "dd-MM-yyyy" );

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(dateFormat.parse(ourDate));
        //calendar.add(Calendar.DATE, 999);
        calendar.add(Calendar.DATE, 1000);

        Date newDate = calendar.getTime();

        System.out.println(dateFormat.format(newDate));
    }
}