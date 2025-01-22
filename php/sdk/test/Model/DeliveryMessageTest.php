<?php
/**
 * DeliveryMessageTest
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
use OpenAPI\Client\Model\fulfillment\outbound\DeliveryMessage;

/**
 * DeliveryMessageTest Class Doc Comment
 *
 * @category    Class
 * @description Localized messaging for a delivery offering.
 * @package     OpenAPI\Client
 */
class DeliveryMessageTest extends TestCase
{

    private DeliveryMessage $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryMessage();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryMessage"
     */
    public function testDeliveryMessage()
    {
        $this->assertInstanceOf(DeliveryMessage::class, $this->model);
    }

    /**
     * Test attribute "text"
     */
    public function testPropertyText()
    {
        $testValue = 'test';
        
        $this->model->setText($testValue);
        $this->assertEquals($testValue, $this->model->getText());
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }
}
