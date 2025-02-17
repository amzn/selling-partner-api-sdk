<?php
/**
 * LockerDetailsTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\LockerDetails;

/**
 * LockerDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The locker details, which you can use to access the locker delivery box.
 * @package     SpApi
 */
class LockerDetailsTest extends TestCase
{

    private LockerDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LockerDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LockerDetails"
     */
    public function testLockerDetails()
    {
        $this->assertInstanceOf(LockerDetails::class, $this->model);
    }

    /**
     * Test attribute "locker_number"
     */
    public function testPropertyLockerNumber()
    {
        $testValue = 'test';
        
        $this->model->setLockerNumber($testValue);
        $this->assertEquals($testValue, $this->model->getLockerNumber());
    }

    /**
     * Test attribute "locker_access_code"
     */
    public function testPropertyLockerAccessCode()
    {
        $testValue = 'test';
        
        $this->model->setLockerAccessCode($testValue);
        $this->assertEquals($testValue, $this->model->getLockerAccessCode());
    }
}
