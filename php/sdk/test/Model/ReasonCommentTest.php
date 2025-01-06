<?php
/**
 * ReasonCommentTest
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
use OpenAPI\Client\Model\fulfillmentInbound\ReasonComment;

/**
 * ReasonCommentTest Class Doc Comment
 *
 * @category    Class
 * @description Reason for cancelling or rescheduling a self-ship appointment.
 * @package     OpenAPI\Client
 */
class ReasonCommentTest extends TestCase
{

    private ReasonComment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReasonComment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReasonComment"
     */
    public function testReasonComment()
    {
        $this->assertInstanceOf(ReasonComment::class, $this->model);
    }
}
