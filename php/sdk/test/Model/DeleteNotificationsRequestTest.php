<?php
/**
 * DeleteNotificationsRequestTest
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
use SpApi\Model\appIntegrations\v2024_04_01\DeleteNotificationsRequest;

/**
 * DeleteNotificationsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the &#x60;deleteNotifications&#x60; operation.
 * @package     SpApi
 */
class DeleteNotificationsRequestTest extends TestCase
{

    private DeleteNotificationsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeleteNotificationsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeleteNotificationsRequest"
     */
    public function testDeleteNotificationsRequest()
    {
        $this->assertInstanceOf(DeleteNotificationsRequest::class, $this->model);
    }

    /**
     * Test attribute "template_id"
     */
    public function testPropertyTemplateId()
    {
        $testValue = 'test';
        
        $this->model->setTemplateId($testValue);
        $this->assertEquals($testValue, $this->model->getTemplateId());
    }

    /**
     * Test attribute "deletion_reason"
     */
    public function testPropertyDeletionReason()
    {
        $enumInstance = new DeleteNotificationsRequest();
        $allowedValues = $enumInstance->getDeletionReasonAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setDeletionReason($testValue);
        $this->assertEquals($testValue, $this->model->getDeletionReason());
    }
}
