<?php
/**
 * ListFinancialEventsResponseTest
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
use SpApi\Model\finances\v0\ListFinancialEventsResponse;

/**
 * ListFinancialEventsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the listFinancialEvents operation.
 * @package     SpApi
 */
class ListFinancialEventsResponseTest extends TestCase
{

    private ListFinancialEventsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListFinancialEventsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListFinancialEventsResponse"
     */
    public function testListFinancialEventsResponse()
    {
        $this->assertInstanceOf(ListFinancialEventsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\finances\v0\ListFinancialEventsPayload();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
