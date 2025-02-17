<?php
/**
 * CreateNotificationResponseTest
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
use SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse;

/**
 * CreateNotificationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the &#x60;createNotification&#x60; operation.
 * @package     SpApi
 */
class CreateNotificationResponseTest extends TestCase
{

    private CreateNotificationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateNotificationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateNotificationResponse"
     */
    public function testCreateNotificationResponse()
    {
        $this->assertInstanceOf(CreateNotificationResponse::class, $this->model);
    }

    /**
     * Test attribute "notification_id"
     */
    public function testPropertyNotificationId()
    {
        $testValue = 'test';
        
        $this->model->setNotificationId($testValue);
        $this->assertEquals($testValue, $this->model->getNotificationId());
    }
}
