<?php
/**
 * ProcessingDirectiveTest
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
use SpApi\Model\notifications\v1\ProcessingDirective;

/**
 * ProcessingDirectiveTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information passed to the subscription to control the processing of notifications. For example, you can use an &#x60;eventFilter&#x60; to customize your subscription to send notifications for only the specified &#x60;marketplaceId&#x60;s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the &#x60;notificationType&#x60;.  This feature is currently only supported by the &#x60;ANY_OFFER_CHANGED&#x60; and &#x60;ORDER_CHANGE&#x60; &#x60;notificationType&#x60;s.
 * @package     SpApi
 */
class ProcessingDirectiveTest extends TestCase
{

    private ProcessingDirective $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProcessingDirective();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProcessingDirective"
     */
    public function testProcessingDirective()
    {
        $this->assertInstanceOf(ProcessingDirective::class, $this->model);
    }

    /**
     * Test attribute "event_filter"
     */
    public function testPropertyEventFilter()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\EventFilter();
        
        $this->model->setEventFilter($testValue);
        $this->assertEquals($testValue, $this->model->getEventFilter());
    }
}
