<?php
/**
 * ExpiryDateTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\transfers\v2024_06_01\ExpiryDate;

/**
 * ExpiryDateTest Class Doc Comment
 *
 * @category    Class
 * @description The expiration date of the card used for payment. If the payment method is not &#x60;card&#x60;, the expiration date is &#x60;null&#x60;.
 * @package     SpApi
 */
class ExpiryDateTest extends TestCase
{

    private ExpiryDate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExpiryDate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExpiryDate"
     */
    public function testExpiryDate()
    {
        $this->assertInstanceOf(ExpiryDate::class, $this->model);
    }

    /**
     * Test attribute "month"
     */
    public function testPropertyMonth()
    {
        $testValue = 'test';
        
        $this->model->setMonth($testValue);
        $this->assertEquals($testValue, $this->model->getMonth());
    }

    /**
     * Test attribute "year"
     */
    public function testPropertyYear()
    {
        $testValue = 'test';
        
        $this->model->setYear($testValue);
        $this->assertEquals($testValue, $this->model->getYear());
    }
}
