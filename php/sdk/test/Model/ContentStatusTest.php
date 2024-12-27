<?php
/**
 * ContentStatusTest
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
use OpenAPI\Client\Model\apluscontent\ContentStatus;

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
