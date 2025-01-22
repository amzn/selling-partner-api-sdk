<?php
/**
 * ContentStatusTest
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
use OpenAPI\Client\Model\aplusContent\ContentStatus;

/**
 * ContentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The submission status of the content document.
 * @package     OpenAPI\Client
 */
class ContentStatusTest extends TestCase
{

    private ContentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentStatus"
     */
    public function testContentStatus()
    {
        $this->assertInstanceOf(ContentStatus::class, $this->model);
    }
}
