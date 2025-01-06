<?php
/**
 * DateRangeTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentOutbound\DateRange;

/**
 * DateRangeTest Class Doc Comment
 *
 * @category    Class
 * @description The time range within which something (for example, a delivery) will occur.
 * @package     OpenAPI\Client
 */
class DateRangeTest extends TestCase
{

    private DateRange $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DateRange();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DateRange"
     */
    public function testDateRange()
    {
        $this->assertInstanceOf(DateRange::class, $this->model);
    }

    /**
     * Test attribute "earliest"
     */
    public function testPropertyEarliest()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEarliest($testValue);
        $this->assertEquals($testValue, $this->model->getEarliest());
    }

    /**
     * Test attribute "latest"
     */
    public function testPropertyLatest()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLatest($testValue);
        $this->assertEquals($testValue, $this->model->getLatest());
    }
}
