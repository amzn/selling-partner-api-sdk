<?php
/**
 * ListFinancialEventsPayloadTest
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
use SpApi\Model\finances\v0\ListFinancialEventsPayload;

/**
 * ListFinancialEventsPayloadTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the listFinancialEvents operation.
 * @package     SpApi
 */
class ListFinancialEventsPayloadTest extends TestCase
{

    private ListFinancialEventsPayload $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListFinancialEventsPayload();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListFinancialEventsPayload"
     */
    public function testListFinancialEventsPayload()
    {
        $this->assertInstanceOf(ListFinancialEventsPayload::class, $this->model);
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }

    /**
     * Test attribute "financial_events"
     */
    public function testPropertyFinancialEvents()
    {
        
        $testValue = new \SpApi\Model\finances\v0\FinancialEvents();
        
        $this->model->setFinancialEvents($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEvents());
    }
}
