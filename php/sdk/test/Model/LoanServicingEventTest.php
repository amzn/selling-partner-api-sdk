<?php
/**
 * LoanServicingEventTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\finances\v0\LoanServicingEvent;

/**
 * LoanServicingEventTest Class Doc Comment
 *
 * @category    Class
 * @description A loan advance, loan payment, or loan refund.
 * @package     OpenAPI\Client
 */
class LoanServicingEventTest extends TestCase
{

    private LoanServicingEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LoanServicingEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LoanServicingEvent"
     */
    public function testLoanServicingEvent()
    {
        $this->assertInstanceOf(LoanServicingEvent::class, $this->model);
    }

    /**
     * Test attribute "loan_amount"
     */
    public function testPropertyLoanAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setLoanAmount($testValue);
        $this->assertEquals($testValue, $this->model->getLoanAmount());
    }

    /**
     * Test attribute "source_business_event_type"
     */
    public function testPropertySourceBusinessEventType()
    {
        $testValue = 'test';
        
        $this->model->setSourceBusinessEventType($testValue);
        $this->assertEquals($testValue, $this->model->getSourceBusinessEventType());
    }
}
